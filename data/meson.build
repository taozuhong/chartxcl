# Install app fixed icons
# Fixed icons path: fixed/<size>/{apps, actions, mimetypes}/*.png
icon_sizes = ['16', '24', '32', '48', '64', '128']
icons_dir = join_paths(install_data_dir, 'icons', 'hicolor')
foreach size : icon_sizes
  install_subdir(
      join_paths('icons', 'fixed', size + 'x' + size),
      install_dir: icons_dir
  )
endforeach

# Install app scalable icons
# Scalable icons path: scalable/{apps, actions, mimetypes}/*.svg
install_subdir(
  join_paths('icons', 'scalable'),
  install_dir: join_paths(install_data_dir, 'icons/hicolor')
)
install_data(
  join_paths('icons', 'scalable', 'apps', ('@0@.svg').format(meson.project_name())),
  install_dir: join_paths(install_data_dir, 'icons', 'hicolor', 'symbolic', 'apps'),
  rename: '@0@-symbolic.svg'.format(meson.project_name())
)
