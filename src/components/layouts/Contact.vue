<template>
    <div class="container">
        <div class="w-full px-4">
            <div class="max-w-xl mx-auto text-center mb-16">
                <h4 class="font-semibold text-lg text-primary mb-2">Kontak</h4>
                <h2 class="font-bold text-dark text-3xl mb-4">Hubungi Kami</h2>
                <p class="font-medium text-md text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint consequuntur ut totam quaerat corrupti? Et esse praesentium totam eum enim.</p>
            </div>
        </div>

        <form action="" @submit.prevent>
            <div class="w-full lg:w-2/3 mx-auto">
                <div class="w-full px-4 mb-8">
                    <label for="" class="text-base font-bold text-primary">Nama</label>
                    <input type="text" id="name" class="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                </div>
                <div class="w-full px-4 mb-8">
                    <label for="" class="text-base font-bold text-primary">Email</label>
                    <input type="email" id="email" class="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                </div>
                <div class="w-full px-4 mb-8">
                    <label for="" class="text-base font-bold text-primary">Pesan</label>
                    <textarea type="email" id="email" class="w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                </div>
                <div class="w-full px-4 mb-8">
                    <button type="submit" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out">Kirim</button>
                </div>
            </div>
        </form>
        
    </div>
</template>