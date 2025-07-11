import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TapVoiceRecordComponent } from './components/tap-voice-record/tap-voice-record.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TapVoiceRecordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voice-recorder';
  private http = inject(HttpClient);

  onVoiceRecorded(blob: Blob) {
    const file = new File([blob], 'recording.webm', { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('audio', file);

    this.http.post('YOUR_BACKEND_ENDPOINT', formData).subscribe(response => {
      console.log('Transcription:', response);
    });
  }
}
