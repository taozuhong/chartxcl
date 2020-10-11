# Project attributes
project('chartxcl', ['c', 'vala'], version: '0.1.0')

# App locale and pluginis directory
project_po_dir = join_paths (meson.source_root (), 'po')
project_src_dir = join_paths (meson.source_root (), 'src')
project_vapi_dir = join_paths (meson.source_root (), 'vapi')
project_data_dir = join_paths (meson.source_root (), 'data')
install_data_dir = join_paths (get_option ('prefix'), get_option ('datadir'))

# Debug support: output c code to locate bug
if 'debug' == get_option('buildtype')
  add_global_arguments(['--ccode', '--debug'], language: 'vala')
endif

# Include vapi in the project folder
add_project_arguments(['--vapidir', join_paths(meson.source_root(), 'vapi')], language: 'vala')

# Include the translations module
add_global_arguments('-DGETTEXT_PACKAGE="@0@"'.format (meson.project_name()), language: 'c')

library_common = [
  meson.get_compiler('vala').find_library('posix'),
  # dependency('cairo', version: '>= 1.14'),
  dependency('gdk-pixbuf-2.0', version: '>= 2.38'),
  dependency('gee-0.8', version: '>= 0.8'),
  dependency('gio-2.0', version: '>= 2.64'),
  dependency('glib-2.0', version: '>= 2.64'),
  # dependency('goocanvas-2.0', version: '>= 2.0.4'),
  dependency('gtk+-3.0', version: '>= 3.24'),
  dependency('json-glib-1.0', version: '>= 1.0'),
  dependency('libsoup-2.4', version: '>= 2.64'),
  dependency('uchardet', version: '>= 0.0.7'),
]

# platform specific dependenies
headers_common = []
headers_platform = []
library_platform = []
sources_platform = []
compiler_c = meson.get_compiler('c')
host_os = host_machine.system().to_lower()
if host_os.contains('mingw') or host_os.contains('cygwin') or host_os.contains('windows')
  add_project_arguments(['--define', 'WINDOWS'], language: 'vala')
  add_project_arguments(['--define', 'WINDOWS'], language: 'c')
  # sources_platform += 'Platform/windows.vapi'
  library_platform += dependency('gio-windows-2.0')
elif host_os.contains('linux')
  add_project_arguments(['--define', 'LINUX'], language: 'vala')
  add_project_arguments(['--define', 'LINUX'], language: 'c')
  library_platform += dependency('gio-unix-2.0')
elif host_os.contains('darwin') or host_os.contains('machten') or host_os.contains('rhapsody')
  add_project_arguments(['--define', 'MACOS'], language: 'vala')
  add_project_arguments(['--define', 'MACOS'], language: 'c')
  # sources_platform += 'Platform/macos.vapi'
  library_platform += dependency('gio-unix-2.0')
else
  message('Unknown platform: ' + host_os)
  # library_platform += dependency('gio-unix-2.0')
endif

# import meson module
meson_module_i18n = import('i18n')
meson_module_gnome = import('gnome')

subdir('data')
subdir('src')
subdir('po')

meson.add_install_script('tools/meson/install.py')
