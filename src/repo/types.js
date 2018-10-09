// @flow
import type { Owner } from '../repo-owner';

export type Repository = {
  name: string,
  description: ?string,
  owner: Owner
};

export type Commit = {
  abbreviatedOid: string,
  message: string,
  author: {
    name: string,
    avatarUrl: string
  }
};
