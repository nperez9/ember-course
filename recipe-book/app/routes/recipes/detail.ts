import Route from '@ember/routing/route';

export default class RecepiesDetailRoute extends Route {
  async model(params: { r_id: string }) {
    return "nothing";
  }
}
