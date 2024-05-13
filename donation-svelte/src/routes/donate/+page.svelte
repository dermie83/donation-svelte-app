<script lang="ts">
  import { currentSession, latestDonation, subTitle } from "$lib/stores";
  import DonateForm from "./DonateForm.svelte";
  import Card from "$lib/ui/Card.svelte";
  import { donationService } from "$lib/services/donation-service";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import type { Lighthouse, Donation } from "$lib/types/donation-types";
  import DonationList from "$lib/ui/DonationList.svelte";

  let lighthouseList: Lighthouse[] = [];
  let donations: Donation[] = [];
  subTitle.set("Make a Donation");

  onMount(async () => {
    lighthouseList = await donationService.getLighthouse(get(currentSession));
    donations = await donationService.getDonations(get(currentSession));
  });
  latestDonation.subscribe(async (donation) => {
    if (donation) {
      donations.push(donation);
      donations = [...donations];
    }
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Donatinons to Date">
      <DonationList {donations} />
    </Card>
  </div>
  <div class="column">
    <Card title="Please Donate">
      <DonateForm {lighthouseList} />
    </Card>
  </div>
</div>