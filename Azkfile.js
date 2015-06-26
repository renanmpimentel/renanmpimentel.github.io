/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

systems({
  'renanmpimentel': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: { docker: 'dynaum/ruby-bundler-node' },
    // Steps to execute before running instances
    provision: [
      'bundle install --path /azk/bundler',
    ],
    workdir : '/azk/#{manifest.dir}',
    command : 'bundle exec jekyll serve -s ./ --config ./_config.yml --port=$HTTP_PORT --host=0.0.0.0 --watch --force_polling',
    shell   : '/bin/bash',
    // not expect application response
    scalable: {'default': 1},
    // Mounts folders to assigned paths
    mounts: {
      '/azk/bundler'                         : persistent('bundler'),
      '/azk/#{manifest.dir}'                 : path('.'),
      '/azk/#{manifest.dir}/_site'           : path('_site'),
    },
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ]
    },
    envs: {
      // set instances variables
      RUBY_ENV : 'development',
      BUNDLE_APP_CONFIG : '/azk/bundler',
    },
  },
});
