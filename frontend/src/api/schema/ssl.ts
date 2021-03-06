/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import request from '@/utils/request'

import { ISSLData } from '../types'

export const getSSLList = () =>
  request({
    url: '/api/v1/ssl/list/',
    method: 'GET'
  })

export const updateSSL = (id: string, data: any) =>
  request({
    url: `/api/v1/ssl/${id}`,
    method: 'PUT',
    data
  })

export const getSSL = (id: string) =>
  request({
    url: `/api/v1/ssl/${id}`,
    method: 'GET'
  })

export const removeSSL = (id: string) =>
  request({
    url: `/api/v1/ssl/${id}`,
    method: 'DELETE'
  })

export const createSSL = (data: any) =>
  request({
    url: '/api/v1/ssl/',
    method: 'POST',
    data
  })
