<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import { onMount } from "svelte";
  import { donationService } from "$lib/services/donation-service";
  import { currentSession, subTitle } from "$lib/stores";
  import { get } from "svelte/store";
  import Card from "$lib/ui/Card.svelte";
  import type { DataSet } from "$lib/types/donation-types";
  import { generateByMethod, generateByLighthouse } from "$lib/services/donation-utils";

  let totalByMethod: DataSet;
  let donationsByLighthouse: DataSet;

  subTitle.set("Donations Data");

  onMount(async () => {
    const donationList = await donationService.getDonations(get(currentSession));
    const lighthouses = await donationService.getLighthouse(get(currentSession));

    totalByMethod = generateByMethod(donationList);
    donationsByLighthouse = generateByLighthouse(donationList, lighthouses);
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Donations By Method">
      <Chart data={totalByMethod} type="bar" />
    </Card>
  </div>
  <div class="column has-text-centered">
    <Card title="Donations By Method">
      <Chart data={donationsByLighthouse} type="pie" />
    </Card>
  </div>
</div>