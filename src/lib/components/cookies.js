import { browser } from '$app/environment';

/**
 * @param {string} name
 * @param {string} value
 * @param {number} hours
 */
export function setCookie(name, value, hours) {
    if(browser){
    const expiration = new Date();
    expiration.setTime(expiration.getTime() + hours * 60 * 60 * 1000); // Convert hours to milliseconds
  
    const expires = "expires=" + expiration.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  }
  /**
 * @param {any} name
 */
  export function getCookie(name) {
        if(browser){
        const cookies = document.cookie.split('; ');
        const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
        return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
        }
  }
  
  /**
 * @param {any} name
 */
  export function deleteCookie(name) {
        if(browser){
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
  }
  
  /**
 * @param {{ [x: string]: any; }} options
 */
  function optionsToString(options) {
    return Object.keys(options)
      .map(key => `${key}=${options[key]}`)
      .join('; ');
  }