export interface ToastWithDurationPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
