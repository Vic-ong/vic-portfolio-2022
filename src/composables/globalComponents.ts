/* eslint-disable vue/component-definition-name-casing */
import { App } from 'vue';
import PageContainer from '@/components/PageContainer.vue';
import AnimateScrollIntoView from '@/components/AnimateScrollIntoView.vue';
import List from '@/components/List.vue';
import Section from '@/components/Section.vue';
import SubSection from '@/components/SubSection.vue';
import Title from '@/components/Title.vue';
import Title2 from '@/components/Title2.vue';

export const registerComponents = (app: App): void => {
  app.component('PageContainer', PageContainer);
  app.component('AnimateScrollIntoView', AnimateScrollIntoView);
  app.component('List', List);
  app.component('Section', Section);
  app.component('SubSection', SubSection);
  app.component('Title', Title);
  app.component('Title2', Title2);
};
