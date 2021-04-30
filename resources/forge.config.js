const path = require('path')

module.exports = {
  packagerConfig: {
    icon: './icons/canary/logseq_big_sur.icns',
  },
  makers: [
    {
      'name': '@electron-forge/maker-squirrel',
      'config': {
        'name': 'Logseq Canary',
        'setupIcon': './icons/canary/logseq.ico'
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
        icon: './icons/canary/logseq_big_sur.icns',
        name: 'Logseq Canary'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux']
    },
    {
      name: 'electron-forge-maker-appimage',
      platforms: ['linux']
    }
  ],

  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'logseq',
          name: 'logseq'
        },
        prerelease: true
      }
    }
  ]
}
