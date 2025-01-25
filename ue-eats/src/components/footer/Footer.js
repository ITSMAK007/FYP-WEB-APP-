import React from 'react'

function Footer() {
  return (
    <>
    <footer class="bg-gray-900 text-white py-10">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      
      <div>
        <h3 class="text-lg font-semibold mb-4">About Us</h3>
        <p class="text-gray-400">
          We are a team of passionate developers dedicated to creating amazing web experiences.
        </p>
        <p class="mt-4 text-gray-400">Email: support@example.com</p>
        <p class="mt-2 text-gray-400">Phone: +123 456 7890</p>
      </div>

    
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="/hero" class="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="/Services" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="/team" class="text-gray-400 hover:text-white">Portfolio</a></li>
          <li><a href="/contactt" class="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      
      <div>
        <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-0.729 0-1.325 0.597-1.325 1.325v21.351c0 0.729 0.596 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462 0.099 2.795 0.143v3.243l-1.917 0.001c-1.504 0-1.794 0.715-1.794 1.764v2.308h3.588l-0.467 3.622h-3.121v9.294h6.116c0.729 0 1.324-0.596 1.324-1.324v-21.351c0-0.729-0.595-1.325-1.324-1.325z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19.616 3.19c0.001 0.091 0.001 0.183 0.001 0.275 0 2.808-2.138 6.045-6.045 6.045-1.2 0-2.318-0.35-3.263-0.957 0.167 0.019 0.337 0.029 0.508 0.029 0.996 0 1.914-0.34 2.645-0.91-0.931-0.017-1.717-0.631-1.989-1.475 0.13 0.025 0.263 0.039 0.4 0.039 0.194 0 0.383-0.026 0.565-0.074-0.974-0.195-1.707-1.057-1.707-2.086v-0.027c0.288 0.16 0.616 0.257 0.965 0.269-0.571-0.381-0.947-1.034-0.947-1.774 0-0.39 0.105-0.754 0.289-1.068 1.051 1.288 2.625 2.133 4.395 2.222-0.036-0.156-0.055-0.319-0.055-0.485 0-1.179 0.957-2.136 2.136-2.136 0.614 0 1.168 0.259 1.556 0.674 0.488-0.096 0.947-0.275 1.361-0.521-0.16 0.502-0.498 0.922-0.94 1.187 0.435-0.052 0.849-0.167 1.234-0.337-0.289 0.433-0.653 0.81-1.072 1.111z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c-5.208 0-9.437 4.229-9.437 9.437 0 4.169 2.769 7.691 6.579 8.946 0.48 0.09 0.657-0.208 0.657-0.466 0-0.23-0.008-0.838-0.013-1.644-2.676 0.582-3.242-1.246-3.242-1.246-0.436-1.106-1.065-1.4-1.065-1.4-0.872-0.596 0.066-0.584 0.066-0.584 0.963 0.068 1.471 0.99 1.471 0.99 0.856 1.466 2.244 1.042 2.79 0.797 0.087-0.621 0.335-1.042 0.61-1.282-2.136-0.242-4.38-1.068-4.38-4.753 0-1.049 0.374-1.907 0.986-2.58-0.1-0.242-0.428-1.215 0.091-2.534 0 0 0.801-0.256 2.621 0.98 0.761-0.211 1.577-0.316 2.388-0.32 0.812 0.004 1.628 0.109 2.39 0.32 1.819-1.236 2.619-0.98 2.619-0.98 0.519 1.319 0.191 2.292 0.094 2.534 0.615 0.673 0.985 1.531 0.985 2.58 0 3.694-2.246 4.508-4.385 4.745 0.344 0.295 0.651 0.876 0.651 1.765 0 1.275-0.012 2.304-0.012 2.619 0 0.259 0.175 0.556 0.661 0.461 3.809-1.257 6.573-4.777 6.573-8.941 0-5.208-4.229-9.437-9.437-9.437z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    
    <div class="mt-8 border-t border-gray-700 pt-4">
      <p class="text-center text-gray-500 text-sm">
        © 2024 Your Company. All rights reserved.
      </p>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer