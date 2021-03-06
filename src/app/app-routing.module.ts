import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { SignupEmailRedirectComponent } from './views/signup-email-redirect/signup-email-redirect.component';
import { MemberStoreInvitationComponent } from './views/member-store-invitation/member-store-invitation.component';
// import { PasswordResetComponent } from './views/password-reset/password-reset.component';
//import { Orders1Component } from './orders1.component';
//import { Orders2Component } from './orders2.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)},
  { path: 'signup', loadChildren:() => import('./views/signup/signup.module').then(m => m.SignupModule)},
  { path: 'page-under-progress', loadChildren: () => import('./views/page-under-progress/page-under-progress.module').then(m => m.PageUnderProgressModule)},
  { path: 'email-token-expired', loadChildren: () => import('./views/email-token-expired/email-token-expired.module').then(m => m.EmailTokenExpiredModule)}, 
  { path: 'confirm-singup', loadChildren:() => import('./views/confirmation-signup/confirmation-signup.module').then(m => m.ConfirmationSignupModule)},
  { path: 'resend-email', loadChildren:() => import('./views/resend-email/resend-email.module').then(m => m.ResendEmailModule) },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'email-verify', component: SignupEmailRedirectComponent},
  { path: 'store', loadChildren: () => import('./views/add-store-forms/add-store-forms.module').then(m => m.AddStoreFormsModule)},
  { path: 'dashboard', loadChildren: () => import('./views/containers/containers.module').then(m => m.ContainersModule)},
  { path: 'store-invitation', component: MemberStoreInvitationComponent},
  { path: 'reset-password', loadChildren:() => import('./views/password-reset/password-reset.module').then(m => m.PasswordResetModule)},
  {path: 'orders1', loadChildren:() => import('./orders1/orders1.module').then(m => m.Orders1Module)},
  {path: 'orders2', loadChildren:() => import('./views/orders2/orders2.module').then(m => m.Orders2Module)},
  {path: 'orders3', loadChildren:() => import('./views/orders3/orders3.module').then(m => m.Orders3Module)},
  {path: 'orders', loadChildren:() => import('./views/orders/orders.module').then(m => m.OrdersModule)},
  {path: 'register-business', loadChildren:() => import('./register-business/register-business.module').then(m => m.RegisterBusinessModule)},
  {path: 'register-plan', loadChildren:() => import('./register-plan/register-plan.module').then(m => m.RegisterPlanModule)},
  {path: 'register-password', loadChildren:() => import('./register-password/register-password.module').then(m => m.RegisterPasswordModule)},
  {path: 'register-verification', loadChildren:() => import('./register-verification/register-verification.module').then(m => m.RegisterVerificationModule)},
  {path: 'register-about-store', loadChildren:() => import('./register-about-store/register-about-store.module').then(m => m.RegisterAboutStoreModule)},
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
