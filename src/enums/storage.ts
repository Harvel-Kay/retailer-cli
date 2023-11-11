const enum Store {
  Auth_id = "auth-key",
  Current_p = "current_p",
  Last_p = "last_page",
}

export const enum TDelta {
  Sec = 1_000,
  Min = 60_000,
  Hour = 3_600_000,
  Day = 86_400_000,
  Month = 2_592_000_000,
}

export default Store;
