<script lang="ts">
  import type { Donation } from "$lib/types/donation-types";

  export let donations: Donation[];
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Amount</th>
    <th>Method</th>
    <th>Lighthouse</th>
    <th>Donor</th>
  </thead>
  <tbody>
    {#each donations as donation}
      <tr>
        <td>
          {donation.amount}
        </td>
        <td>
          {donation.method}
        </td>
        <td>
          {#if typeof donation.lighthouse !== "string"}
            {donation.lighthouse.lastName}, {donation.lighthouse.firstName}
          {/if}
        </td>
        <td>
          {#if typeof donation.donor !== "string"}
            {donation.donor.lastName}, {donation.donor.firstName}
          {:else}
            {donation.donor}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>