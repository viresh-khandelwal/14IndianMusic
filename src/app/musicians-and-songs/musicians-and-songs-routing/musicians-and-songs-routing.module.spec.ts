import { MusiciansAndSongsRoutingModule } from './musicians-and-songs-routing.module';

describe('MusiciansAndSongsRoutingModule', () => {
  let musiciansAndSongsRoutingModule: MusiciansAndSongsRoutingModule;

  beforeEach(() => {
    musiciansAndSongsRoutingModule = new MusiciansAndSongsRoutingModule();
  });

  it('should create an instance', () => {
    expect(musiciansAndSongsRoutingModule).toBeTruthy();
  });
});
