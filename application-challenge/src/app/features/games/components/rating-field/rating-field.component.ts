import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RatingStar } from '../../models/rating-star.model';

@Component({
    selector: 'apc-rating-field',
    templateUrl: './rating-field.component.html',
    styleUrls: ['./rating-field.component.scss'],
})
export class RatingFieldComponent implements OnInit {
    public ratingStars: RatingStar[] = [];
    private maxStars = 5;
    @Input() rating: number = 0;
    @Output() rateChanged = new EventEmitter<number>();

    //
    // ─── LIFECYCLE METHODS ──────────────────────────────────────────────────────────
    //

    ngOnInit(): void {
        this.generateRatingStars();
    }

    //
    // ─── RATING METHODS ─────────────────────────────────────────────────────────────
    //

    generateRatingStars(): void {
        for (let i = 0; i < this.maxStars; i++) {
            this.ratingStars.push({ id: i + 1, isActive: i + 1 <= this.rating });
        }
    }

    setRating(rating: number): void {
        this.ratingStars.forEach((star: RatingStar) => {
            return star.id <= rating ? (star.isActive = true) : (star.isActive = false);
        });
        this.rateChanged.emit(rating);
    }
}
