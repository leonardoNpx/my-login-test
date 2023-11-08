export interface UserLoginProps {
  email: string;
  password: string;
}

export interface UserProps {
  id: string;
  organizationId: number;
  email: string;
  name: string;
  avatar: string;
  nickname: string;
  ws_url: string;
  http_url: string;
  pbx_enabled: boolean;
  department_ids: [number];
  npx_code: null;
  npx_password?: null;
  npx_queue?: null;
  role: string;
  paused: boolean;
  refresh_token: string;
}
