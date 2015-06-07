var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('node_modules/bootstrap-sass/assets/fonts', 'public/fonts');
    mix.copy('node_modules/bootstrap-sass/assets/javascripts', 'resources/assets/js');
    mix.copy('node_modules/bootstrap-sass/assets/stylesheets', 'resources/assets/sass');
    
    mix.sass('app.scss');
});
