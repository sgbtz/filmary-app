export class Film {

	public _id: string = "0"; // id from filmary db
	public poster_path: string;
	public adult: boolean;
	public overview: string;
	public release_date: string;
	public genre_ids: number[];
	public id: number; // id from tmdb
	public original_title: string;
	public original_language: string;
	public title: string;
	public popularity: number;
	public vote_count: number;
	public vote_average: number;
	public added: boolean;

  constructor() { }

}
