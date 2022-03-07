import { Component } from '@angular/core';
import { User } from '../types';
import generated from '../_files/generated.json';

type Speacker = {
  user: User;
  favor: boolean;
  rating: number;
};

@Component({
  selector: 'app-event-speackers',
  templateUrl: './event-speackers.component.html',
  styleUrls: ['./event-speackers.component.css'],
})
export class EventSpeackers {
  speakers = generated;
  favorites: Speacker[] = [];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  speackersCopy: Speacker[] = [];
  value = '';

  constructor() {
    this.speakers = generated.map((user: User) => ({
      user: user,
      favor: false,
      rating: 0,
    }));
    this.favorites = [];
    this.speackersCopy = [...this.speakers];
  }

  onChanges(e: string) {
    this.speackersCopy = [...this.speakers];
    this.value = e;
    this.speakers = this.speakers.filter(({ user }: Speacker) =>
      user.name.includes(this.value)
    );
    return this.speakers;
  }

  showValue() {
    this.value = '';
    this.speakers = this.speackersCopy;
    return this.speakers;
  }

  countStar(id: string, star: number) {
    this.speakers = this.speakers.map(({ user, favor, rating }: Speacker) => {
      if (user._id === id) {
        rating = star;
        return { user, favor, rating };
      }
      return { user, favor, rating };
    });
    return this.speakers;
  }

  showFavorites() {
    this.speakers = this.speackersCopy;
    return this.speakers;
  }

  onClickId(id: string) {
    this.speakers = this.speakers.map(({ user, favor, rating }: Speacker) => {
      if (user._id === id) {
        favor = false;
        return { user, favor, rating };
      }
      return { user, favor, rating };
    });
    this.favorites = this.favorites.filter(
      ({ user }: Speacker) => user._id !== id
    );
    return this.speakers;
  }

  onClickFavorites(id: string) {
    this.speakers = this.speakers.map(({ user, favor, rating }: Speacker) => {
      if (user._id === id) {
        console.log(user._id === id);
        favor = true;
        return { user, favor, rating };
      }
      return { user, favor, rating };
    });
    this.favorites = this.speakers.filter(({ favor }: Speacker) => favor);
    return this.speakers;
  }

  popularity() {
    this.speackersCopy = [...this.speakers];
    this.speakers = this.speakers
      .filter(({ rating }: Speacker) => rating > 3)
      .sort((a: Speacker, b: Speacker) => {
        if (a.rating < b.rating) {
          return -1;
        }
        return 0;
      });
    return this.speakers;
  }

  unpopularity() {
    this.speackersCopy = [...this.speakers];
    this.speakers = this.speakers
      .filter(({ rating }: Speacker) => rating <= 3)
      .sort((a: Speacker, b: Speacker) => {
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
      });
    return this.speakers;
  }
}
