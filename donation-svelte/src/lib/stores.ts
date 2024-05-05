// place files you want to import through the `$lib` alias in this folder.
import { writable } from "svelte/store";
import type { Donation, Session } from "$lib/types/donation-types";

export const subTitle = writable<string>();
export const currentSession = writable<Session>();
export const latestDonation = writable<Donation>();
