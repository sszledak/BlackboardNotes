import { BlackboardNotesPage } from './app.po';

describe('blackboard-notes App', () => {
  let page: BlackboardNotesPage;

  beforeEach(() => {
    page = new BlackboardNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
