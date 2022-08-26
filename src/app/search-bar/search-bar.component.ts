import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Article, ArticleService } from '../service/article-service';
import { FuzzySegment, SearchService } from '../service/search.service';


interface FilterMatch {
	score: number;
	value: ArticleSearchType;
	segments: FuzzySegment[];
}

interface ArticleSearchType {
  id: string;
  name: string
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {




  public form: {
    search: string;
  }

	public matches: FilterMatch[] = [];

	private searchService: SearchService;
  articleService: ArticleService

  faSearch = faMagnifyingGlass

  constructor(private searchServiceImport: SearchService, private articleServiceImport: ArticleService) {
    this.searchService = searchServiceImport;
    this.articleService = articleServiceImport

		this.form = {
			search: ''
		};
		this.matches = [];
   }

  ngOnInit(): void {
  }


  public applyFilter() : void {


		if ( ! this.form.search ) {

			this.matches = [];
			return;

		}

    var articleSearchTypes: ArticleSearchType[] = []

    this.articleService.articles.forEach(article => articleSearchTypes.push({id: article.short, name: article.name}))



		this.matches = articleSearchTypes

			.map(
				( article ) => {

					return({
						value: article,
						score: this.searchService.scoreValue( article.name, this.form.search )
					});

				}
			)

			.sort(
				( a, b) => {

					return(
						( ( a.score > b.score ) && -1 ) || // Move item up.
						( ( a.score < b.score ) && 1 ) || // Move item down.
						0
					);

				}
			)
			// For the sake of the demo, we only want to show the top-scoring matches.
			// Slice off the top of the scored values.
			.slice( 0, 20 )
			// At this point, we've narrowed down the set of values to the ones we want
			// to show to the user. Now, we can go back and create a data-structure that
			// can be more easily rendered (but takes more processing).
			.map(
				( scoredValue ) => {

					return({
						score: scoredValue.score,
						value: scoredValue.value,
						segments: this.searchService.parseValue( scoredValue.value.name, this.form.search )
					});

				}
			)
		;

	}



}
