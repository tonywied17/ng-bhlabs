import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  longText = `
  <ul class="fa-ul">
  <li class="mb-4"><span class="fa-li"><i class="fa-solid fa-fire-flame-curved"></i></span><span class="font-[200] ml-2">The "Message to" log entry has been implemented and is now visible on all Server tabs in LogCastle.</span></li>
  <li class="mb-4"><span class="fa-li"><i class="fa-solid fa-hammer"></i></span><span class="font-[200] ml-2">Improved handling of the first message ensures proper display upon opening LogCastle or during the midnight log switch.</span></li>
  <li class="mb-4"><span class="fa-li"><i class="fa-solid fa-hammer"></i></span><span class="font-[200] ml-2">Made a change to the timer tab code to make sure it's checking files only. Created folders should no longer come up as a tab item.</span></li>
  <li class="mb-4"><span class="fa-li"><i class="fa-solid fa-hammer"></i></span><span class="font-[200] ml-2">Updated New-ChatMessage function to not include emotes as part of processing the username. This should fix any issues with usernames having emotes in them.</span></li>
  </ul>
 `;
}
