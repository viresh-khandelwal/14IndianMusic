import { MusiciansAndSongsModule } from './musicians-and-songs.module';

describe('MusiciansAndSongsModule', () => {
  let musiciansAndSongsModule: MusiciansAndSongsModule;

  beforeEach(() => {
    musiciansAndSongsModule = new MusiciansAndSongsModule();
  });

  it('should create an instance', () => {
    expect(musiciansAndSongsModule).toBeTruthy();
  });
});
