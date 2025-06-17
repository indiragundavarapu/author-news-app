import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService, Article } from '../article-service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  authorName = '';
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  filterByAuthor(): void {
    const name = this.authorName.trim();
    if (name) {
      this.articleService.getArticlesByAuthor(name).subscribe(data => {
        this.articles = data;
      });
    } else {
      this.articles = [];
    }
  }
}

