﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            var movies = _context.Movies.ToList();
            return Ok(movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);
            var selectedMovie = _context.Movies.Where(m => m.MovieId == id).Single();
            return Ok(selectedMovie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            _context.Add(value);
            _context.SaveChanges();

            return Ok();
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            // var newMovie = _context.Movies.Where(m => m.MovieId == id);
            _context.Update(movie);
            _context.SaveChanges();
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var selectedMovie = _context.Movies.Where(m => m.MovieId == id);
            _context.Remove(selectedMovie);
            _context.SaveChanges();
            return Ok();
        }
    }
}