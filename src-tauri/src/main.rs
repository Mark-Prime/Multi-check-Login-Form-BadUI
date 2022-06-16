#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::process::Command;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![validate_username, validate_password])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn validate_username(user_name: String) -> bool {
  let mut child = Command::new("sleep").arg("2").spawn().unwrap();
    let _result = child.wait().unwrap();
  return user_name == "admin".to_string();
}

#[tauri::command]
fn validate_password(user_name: String, user_password: String) -> bool {
  if validate_username(user_name) {
    return user_password == "admin".to_string();
  } else {
    return false;
  }
}