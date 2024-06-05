<template>
    <footer class="bg-slate-200 hidden md:block">
        <div class="footer-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            <!-- About Section -->
            <div>
                <h3 class="text-3xl font-semibold">About</h3>
                <div class="about-content flex flex-col mt-4 gap-4">
                    <RouterLink to="/">About MarketPlace</RouterLink>   
                    <RouterLink to="/">Terms & Conditions</RouterLink>    
                    <RouterLink to="/">Privacy Policy</RouterLink>          
                    <RouterLink to="/">Billing Policy</RouterLink>          
                    <RouterLink to="/">Cookie Policy</RouterLink>     
                    <RouterLink to="/">Copyright Infringement Policy</RouterLink> 
                </div>
            </div>

            <!-- Support Section -->
            <div>
                <h3 class="text-3xl font-semibold">Support</h3>
                <div class="support-content flex flex-col mt-4 gap-4">
                    <RouterLink to="/">support@MarketPlace.ng</RouterLink>   
                    <RouterLink to="/">Safety tips</RouterLink>    
                    <RouterLink to="/">Contact Us</RouterLink>          
                    <RouterLink to="/">FAQ</RouterLink>                           
                </div>
            </div>

            <!-- Our Resources Section -->
            <div>
                <h3 class="text-3xl font-semibold">Our Resources</h3>
                <div class="resources-content flex flex-col mt-4 gap-4">
                    <RouterLink to="/">Our blog</RouterLink>   
                    <RouterLink to="/">MarketPlace on FB</RouterLink>    
                    <RouterLink to="/">Our Instagram</RouterLink>          
                    <RouterLink to="/">Our YouTube</RouterLink>  
                    <RouterLink to="/">Our Twitter</RouterLink>          
                </div>
            </div>

            <!-- Hot Links Section -->
            <div>
                <h3 class="text-3xl font-semibold">Hot Links</h3>
                <RouterLink :to="{name: 'home'}" class="links-content flex flex-col mt-4 gap-4">
                   MarketPlace Africa
                </RouterLink>
            </div>
        </div>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Add any additional styling here */
</style>
