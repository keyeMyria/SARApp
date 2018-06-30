@component('mail::message')
# Verify Account

Click on the button below to verify your account.

@component('mail::button', ['url' => '', 'color' => 'green'])
Verify
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
