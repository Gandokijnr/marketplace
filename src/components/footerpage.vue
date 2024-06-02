<template>
    <footer class="bg-slate-200 ">
        <div class="footer-section flex justify-evenly mt-12 p-4">
            <div class="flex flex-col">
                <h3 class="text-3xl font-semibold">About</h3>
                <div class="about-content flex flex-col mt-4 gap-4">
                    <router-link to="/">
                        About MarketPlace
                    </router-link>   
                    <router-link to="/">
                        Terms & Conditions
                    </router-link>    
                    <router-link to="/">
                        Privacy Policy
                    </router-link>          
                    <router-link to="/">
                        Billing Policy
                    </router-link>          
                    <router-link to="/">
                        Cookie Policy   
                    </router-link>     
                    <router-link to="/">
                        Copyright Infringement Policy
                    </router-link> 
                </div>
            </div>
            <div>
                <h3 class="text-3xl font-semibold">Support</h3>
                <div class="support-content flex flex-col mt-4 gap-4">
                    <router-link to="/">
                        support@MarketPlace.ng
                    </router-link>   
                    <router-link to="/">
                        Safety tips
                    </router-link>    
                    <router-link to="/">
                        Contact Us
                    </router-link>          
                    <router-link to="/">
                        FAQ
                    </router-link>                           
                 </div>
            </div>
            <div>
                <h3 class="text-3xl font-semibold">Our Resources</h3>
                <div class="resources-content flex flex-col mt-4 gap-4">
                    <router-link to="/">
                        Our blog
                    </router-link>   
                    <router-link to="/">
                        MarketPlace on FB
                    </router-link>    
                    <router-link to="/">
                        Our Instagram
                    </router-link>          
                    <router-link to="/">
                        Our YouTube
                    </router-link>  
                    <router-link to="/">
                        Our Twitter
                    </router-link>          
                </div>
            </div>
            <div>
                <h3 class="text-3xl font-semibold">Hot Links</h3>
                <router-link :to="{name: 'home'}" class="links-content flex flex-col mt-4 gap-4">
                   MarketPlace Africa
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>