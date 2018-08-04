import { LatestTrendsRoutingModule } from './latest-trends-routing.module';

describe('LatestTrendsRoutingModule', () => {
  let latestTrendsRoutingModule: LatestTrendsRoutingModule;

  beforeEach(() => {
    latestTrendsRoutingModule = new LatestTrendsRoutingModule();
  });

  it('should create an instance', () => {
    expect(latestTrendsRoutingModule).toBeTruthy();
  });
});
