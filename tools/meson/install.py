#!/usr/bin/env python3
# Just for testing on linux, not for publishing

import logging
from os import environ, path, system
from subprocess import call

prefix = environ.get('MESON_INSTALL_PREFIX', '/usr/local')
datadir = path.join(prefix, 'share')
destdir = environ.get('DESTDIR', '')

# Package managers set this so we don't need to run
if not destdir:
    logging.addLevelName( logging.WARNING, "\033[1;31m%s\033[1;0m" % logging.getLevelName(logging.WARNING))
    logging.addLevelName( logging.ERROR, "\033[1;41m%s\033[1;0m" % logging.getLevelName(logging.ERROR))

    print('Updating icon cache...')
    app_icons_dir = path.join(datadir, 'icons', 'hicolor')
    if ((0 == system('which gtk-update-icon-cache')) and path.exists(app_icons_dir)):
        call(['gtk-update-icon-cache', '-qtf', app_icons_dir])
    else:
        logging.error('Command not found: gtk-update-icon-cache')

    print('Updating desktop database...')
    app_appdata_dir = path.join(datadir, 'applications')
    if ((0 == system('which update-desktop-database')) and path.exists(app_appdata_dir)):
        call(['update-desktop-database', '-q', app_appdata_dir])
    else:
        logging.error('Command not found: update-desktop-database')

    print('Compiling GSettings schemas...')
    app_schemas_dir = path.join(datadir, 'glib-2.0', 'schemas')
    if ((0 == system('which glib-compile-schemas')) and path.exists(app_schemas_dir)):
        call(['glib-compile-schemas', app_schemas_dir])
    else:
        logging.error('Command not found: glib-compile-schemas')


