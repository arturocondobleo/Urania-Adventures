import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'uraniaAdventuresDrive',
  access: (allow) => ({
    'media/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.guest.to(['read'])
    ]
  })
});
