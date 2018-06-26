import { Component, OnInit } from '@angular/core';

import { PortalService }  from '../../core/portal.service';

import { Post } from '../../model/common.model';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  private posts: Post[];

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.portalService.getPosts().subscribe(
		(response: Post[]) => {
		  this.posts = response;
		  console.log(this.posts);
		},
		(errResponse: Post[]) => {
		    console.log('Error fetching Posts');
		}
	);
  }

}
