import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetpasswordComponent } from './components/auth/resetpassword/resetpassword.component';
import { ChatComponent } from './components/layout/chats/chat.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidepanelComponent } from './components/layout/sidepanel/sidepanel.component';
import { EventsComponent } from './components/main/events/events.component';
import { FeedsComponent } from './components/main/feeds/feeds.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { TrendingComponent } from './components/main/trending/trending.component';
import { ChangepasswordComponent } from './components/modals/changepassword/changepassword.component';
import { EditprofileComponent } from './components/modals/editprofile/editprofile.component';
import { OtpComponent } from './components/modals/otp/otp.component';
import { PostviewComponent } from './components/modals/postview/postview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ChatComponent,
    HeaderComponent,
    SidepanelComponent,
    EventsComponent,
    FeedsComponent,
    ProfileComponent,
    TrendingComponent,
    ChangepasswordComponent,
    EditprofileComponent,
    OtpComponent,
    PostviewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
