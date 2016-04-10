systems({
  'renanmpimentel': {

    depends: [],

    image: {'docker': 'azukiapp/ruby:2.2'},

    provision: [
      'bundle install --path /azk/bundler',
    ],

    workdir : '/azk/#{manifest.dir}',
    shell   : '/bin/bash',
    command : 'bundle exec jekyll serve -s ./ --config ./_config.yml --port=$HTTP_PORT --host=0.0.0.0 --watch --force_polling',

    mounts: {
      '/azk/bundler'                         : persistent('#{manifest.dir}/bundler'),
      // see this link if you get an error on sync
      // http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc
      '/azk/#{manifest.dir}'                 : sync('.'),
      '/azk/#{manifest.dir}/_site'           : path('#{manifest.dir}/_site'),
      '/azk/#{manifest.dir}/node_modules'    : path('#{manifest.dir}/node_modules'),
      '/azk/#{manifest.dir}/build'           : path('#{manifest.dir}/build'),
    },

    scalable: {'default': 1},
    http: {
      domains: ['#{system.name}.#{azk.default_domain}']
    },
    ports: {
      http: '3000/tcp',
    },
    envs: {
      PATH              : './node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      RUBY_ENV          : 'development',
      BUNDLE_APP_CONFIG : '/azk/bundler',
    },
  },
});
