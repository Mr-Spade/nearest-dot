module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-wix',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32','linux','darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {}
    }
  ],
  publishers: [
    {
      "name": "@electron-forge/publisher-github",
      "config": {
        "repository": {
          "owner": "Mr-Spade",
          "name": "nearest-dot"
        }
      }
    }
  ]
};
