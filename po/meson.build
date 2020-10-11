# Reference: https://www.ibm.com/developerworks/cn/linux/l-cn-linuxglb/index.html

# Internationalization(i18n) and Localization(l10n)
# generate .pot file
# ninja chartxcl-pot

# generate .po files
# ninja chartxcl-update-po

# locale validate
# LC_ALL=zh_CN ./src/kangaroo

meson_module_i18n.gettext(meson.project_name(), 
    args: [ '--directory=' + meson.source_root(),
            '-ktranslatable',
            '--keyword=Name',
            '--keyword=GenericName',
            '--keyword=X-GNOME-FullName',
            '--keyword=Comment',
            '--keyword=Keywords',
            '--from-code=UTF-8' ],
    preset: 'glib'
)

