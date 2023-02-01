<script>
  const scrollIntoView = ({target}) => {
    const el = document.querySelector(target.getAttribute('href'));
    if(!el) return;
    
      console.log(el);
      el.scrollIntoView({
        behavior: "smooth"
      })
    
  }
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hey I'm Pelumi</h1>
        <p class="py-6">I'm a Computer Engineering Student at UT Dallas. I'm into backend development and artificial intelligence. 
            I really love building projects to learn new frameworks, patterns, and ideas.</p>
        <a href="#projects" on:click|preventDefault={scrollIntoView} class="btn btn-primary">CHECK OUT MY PROJECTS <svg class="w-6 h-6 fill-white" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z" fill-rule="nonzero"/></svg></a>
      </div>
    </div>
  </div>