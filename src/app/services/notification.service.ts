import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  public open(message: string, action = 'success', duration = 3000) {
    this.zone.run(() => {
      this.snackBar.open(message, action, { duration });
    });
  }
}
