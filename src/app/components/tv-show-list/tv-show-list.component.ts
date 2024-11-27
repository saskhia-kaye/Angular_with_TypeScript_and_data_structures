import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {
  tvShows: { title: string; url: string }[] = [
    { title: 'Squid Game', url: 'https://www.netflix.com/watch/81040344?source=35' },
    { title: 'The Empress', url: 'https://www.netflix.com/watch/81222923?source=35' },
    { title: 'Outer Banks', url: 'https://www.netflix.com/watch/80236318?source=35' },
    { title: 'Supacell', url: 'https://www.netflix.com/watch/81316476?source=35' },
    { title: 'Hellbound', url: 'https://www.netflix.com/watch/81256675?source=35' }
  ];

  newTvShowTitle: string = '';
  newTvShowUrl: string = '';

  addTvShow() {
    if (this.newTvShowTitle.trim() && this.newTvShowUrl.trim()) {
      this.tvShows.push({
        title: this.newTvShowTitle,
        url: this.newTvShowUrl,
      });
      this.resetInputs();
    }
  }

  deleteTvShow(tvShow: { title: string; url: string }) {
    this.tvShows = this.tvShows.filter(ts => ts.title !== tvShow.title);
  }

  resetInputs() {
    this.newTvShowTitle = '';
    this.newTvShowUrl = '';
  }
}
