import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OrganismComponent} from './organism/organism.component';
import {OrganismDetailComponent} from './organism/organism-detail/organism-detail.component';
import {SpecimenComponent} from './specimen/specimen.component';
import {SpecimenDetailComponent} from './specimen/specimen-detail/specimen-detail.component';
import {DatasetComponent} from './dataset/dataset.component';
import {DatasetDetailComponent} from './dataset/dataset-detail/dataset-detail.component';
import {FileComponent} from './file/file.component';
import {FileDetailComponent} from './file/file-detail/file-detail.component';
import {AnalysisComponent} from './analysis/analysis.component';
import {AnalysisDetailComponent} from './analysis/analysis-detail/analysis-detail.component';
import {ArticleComponent} from './article/article.component';
import {ArticleDetailComponent} from './article/article-detail/article-detail.component';
import {ProtocolSampleComponent} from './protocol-sample/protocol-sample.component';
import {ProtocolSampleDetailsComponent} from './protocol-sample/protocol-sample-details/protocol-sample-details.component';
import {ProtocolExperimentComponent} from './protocol-experiment/protocol-experiment.component';
import {ProtocolExperimentDetailsComponent} from './protocol-experiment/protocol-experiment-details/protocol-experiment-details.component';
import {ProtocolAnalysisComponent} from './protocol-analysis/protocol-analysis.component';
import {ProtocolAnalysisDetailsComponent} from './protocol-analysis/protocol-analysis-details/protocol-analysis-details.component';
import {OrganismsSummaryComponent} from './organisms-summary/organisms-summary.component';
import {SpecimensSummaryComponent} from './specimens-summary/specimens-summary.component';
import {DatasetsSummaryComponent} from './datasets-summary/datasets-summary.component';
import {FilesSummaryComponent} from './files-summary/files-summary.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'organism', component: OrganismComponent},
  {path: 'organism/:id', component: OrganismDetailComponent},
  {path: 'specimen', component: SpecimenComponent},
  {path: 'specimen/:id', component: SpecimenDetailComponent},
  {path: 'dataset', component: DatasetComponent},
  {path: 'dataset/:id', component: DatasetDetailComponent},
  {path: 'file', component: FileComponent},
  {path: 'file/:id', component: FileDetailComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'analysis/:id', component: AnalysisDetailComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'article/:id', component: ArticleDetailComponent},
  {path: 'protocol/samples', component: ProtocolSampleComponent},
  {path: 'protocol/samples/:id', component: ProtocolSampleDetailsComponent},
  {path: 'protocol/experiments', component: ProtocolExperimentComponent},
  {path: 'protocol/experiments/:id', component: ProtocolExperimentDetailsComponent},
  {path: 'protocol/analysis', component: ProtocolAnalysisComponent},
  {path: 'protocol/analysis/:id', component: ProtocolAnalysisDetailsComponent},
  {path: 'summary', redirectTo: 'summary/organisms', pathMatch: 'full'},
  {path: 'summary/organisms', component: OrganismsSummaryComponent},
  {path: 'summary/specimens', component: SpecimensSummaryComponent},
  {path: 'summary/datasets', component: DatasetsSummaryComponent},
  {path: 'summary/files', component: FilesSummaryComponent},
];
