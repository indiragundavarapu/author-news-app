import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';

bootstrapApplication(ArticleComponent, {
  providers: [provideHttpClient()]
});
