export class MediaService {
  private static instance: MediaService;
  public static getInstance(): MediaService {
    if (!MediaService.instance) {
      MediaService.instance = new MediaService();
    }

    return MediaService.instance;
  }

  public async getScreenShare(audio: boolean = false, video: boolean = true): Promise<MediaStream> {
    return await navigator.mediaDevices.getDisplayMedia({ video, audio });
  }

  public async getCamera(audio: boolean = true, video: boolean = true): Promise<MediaStream> {
    return await navigator.mediaDevices.getUserMedia({ video, audio });
  }
}
