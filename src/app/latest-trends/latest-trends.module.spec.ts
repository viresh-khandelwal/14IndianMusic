import { LatestTrendsModule } from './latest-trends.module';

describe('LatestTrendsModule', () => {
  let latestTrendsModule: LatestTrendsModule;

  beforeEach(() => {
    latestTrendsModule = new LatestTrendsModule();
  });

  it('should create an instance', () => {
    expect(latestTrendsModule).toBeTruthy();
  });
});
