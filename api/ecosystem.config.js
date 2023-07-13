module.exports = {
  apps: [
    {
      name: 'prisma-studio',
      interpreter: '/bin/bash',
      script: 'yarn',
      args: '/c/dev/drfernanda/api-nest',
      watch: false,
      autorestart: false,
    },
  ],
};
