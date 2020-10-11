sources_common = [
]

sources_execute = [
]

# Update dynamic config vala file
conf_data = configuration_data()
conf_data.set('VERSION', meson.project_version())
conf_data.set('COMPILE', run_command('date', '+%y%m%d').stdout().strip())
conf_data.set('PROJECT_NAME', meson.project_name())
conf_data.set('GETTEXT_PACKAGE', meson.project_name())

# compile embeded resource
sources_resources = meson_module_gnome.compile_resources(
  meson.project_name() + '-resources',
  join_paths(project_data_dir, meson.project_name() + '.gresource.xml'),
  c_name: meson.project_name(),
  source_dir: project_data_dir
)

libchartxcl = library(
    meson.project_name(),
    sources_common + sources_resources + sources_platform,
    dependencies: library_common + library_platform,
    include_directories: headers_common + headers_platform,
    install: false,
    install_dir: [true, true, true]
)

pkg = import('pkgconfig')
pkg.generate(
    version: meson.project_version(),
    libraries: libchartxcl,
    description: 'chartxcl headers',
    name: meson.project_name(),
    filebase: meson.project_name()
)

install_data (meson.project_name() + '.deps', 
  install_dir: join_paths(get_option('prefix'), get_option('datadir'), 'vala', 'vapi')
)

