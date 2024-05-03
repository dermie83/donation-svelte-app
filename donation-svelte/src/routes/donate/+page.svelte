<script lang="ts">
    import Card from "$lib/ui/Card.svelte";
    import DonateForm from "./DonateForm.svelte";
    import { subTitle } from "$lib/stores";
  
    subTitle.set("Make a Donation");
</script>
  
<Card title="Please Donate">
    <DonateForm />
</Card>